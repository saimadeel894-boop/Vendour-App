/**
 * update_all_screens.js
 * Node script to update all screens according to Requirement 1.
 */
const fs = require('fs');
const path = require('path');

const screensDir = path.join(__dirname, 'src', 'screens');

// We want to process all screens
function getFiles(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getFiles(fullPath, filesList);
        } else {
            if (fullPath.endsWith('.js')) {
                filesList.push(fullPath);
            }
        }
    }
    return filesList;
}

const allScreens = getFiles(screensDir);

for (const file of allScreens) {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // 1. Ensure Dimensions import is present
    if (!content.includes('Dimensions') && content.includes('react-native')) {
        content = content.replace(/import \{(.*?)\} from 'react-native';/s, (match, p1) => {
            let imports = p1.split(',').map(s => s.trim()).filter(Boolean);
            if (!imports.includes('Dimensions')) {
                imports.push('Dimensions');
            }
            return `import {\n  ${imports.join(', ')}\n} from 'react-native';`;
        });
    }

    // 2. Ensure const { width: W, height: H } = Dimensions.get('window');
    if (!content.includes('const { width: W, height: H }')) {
        // Insert after imports
        const importMatch = content.match(/import .*?;/gs);
        if (importMatch) {
            const lastImport = importMatch[importMatch.length - 1];
            content = content.replace(lastImport, `${lastImport}\n\nconst { width: W, height: H } = Dimensions.get('window');`);
        }
    }

    // 3. Ensure edges={['top', 'bottom']} on SafeAreaView
    if (!content.includes("edges={['top', 'bottom']}")) {
        content = content.replace(/<SafeAreaView style=\{s.root\}>/g, `<SafeAreaView style={s.root} edges={['top', 'bottom']}>`);
    }

    // 4. Update ScrollViews container styles and indicator
    // Matches <ScrollView ...> or </ScrollView> etc.
    content = content.replace(/<ScrollView[^>]*>/g, (match) => {
        // Some SV have showsVerticalScrollIndicator already.
        let m = match;
        if (!m.includes('showsVerticalScrollIndicator={false}')) {
            m = m.replace('<ScrollView', '<ScrollView showsVerticalScrollIndicator={false}');
        }

        if (m.includes('contentContainerStyle={{')) {
            // Find where the style is. Usually `contentContainerStyle={{ paddingBottom: 40 }}`
            m = m.replace(/contentContainerStyle=\{\{([^}]+)\}\}/, (m2, p1) => {
                let text = p1;
                if (!text.includes('flexGrow')) text += ', flexGrow: 1';
                if (!text.includes('paddingBottom: 80')) text = text.replace(/paddingBottom:\s*[0-9]+/, 'paddingBottom: 80');
                if (!text.includes('paddingBottom: 80')) text += ', paddingBottom: 80';
                return `contentContainerStyle={{${text}}}`;
            });
        } else if (m.includes('contentContainerStyle={s.content}')) {
            // we'll update s.content at EOF
        } else {
            m = m.replace('<ScrollView', '<ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}');
        }
        return m;
    });

    // Fix paddingBottom in s.content or content
    content = content.replace(/content: \{[^}]+paddingBottom:\s*[0-9]+[^}]*\}/, (m) => {
        let replaced = m.replace(/paddingBottom:\s*[0-9]+/, 'paddingBottom: 80');
        if (!replaced.includes("flexGrow")) {
            replaced = replaced.replace("flexGrow", "flexGrow");
        }
        return replaced;
    });
    content = content.replace(/scrollContent: \{([^}]+)\}/, (m, p) => {
        let internal = p;
        if (!internal.includes('paddingBottom')) internal += ', paddingBottom: 80';
        else internal = internal.replace(/paddingBottom:\s*[0-9]+/, 'paddingBottom: 80');

        if (!internal.includes('flexGrow')) internal += ', flexGrow: 1';
        return `scrollContent: {${internal}}`;
    });

    // StatusBar Light on Login, Dark on others
    if (file.includes('LoginScreen.js')) {
        content = content.replace(/<StatusBar\s+style="dark"\s+\/>/g, '<StatusBar style="light" />');
        content = content.replace(/<StatusBar\s+barStyle="dark-content"\s+\/>/g, '<StatusBar style="light" />');
    } else {
        content = content.replace(/<StatusBar\s+style="light"\s+\/>/g, '<StatusBar style="dark" />');
        content = content.replace(/<StatusBar\s+barStyle="light-content"\s+\/>/g, '<StatusBar style="dark" />');
    }

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
    }
}

console.log('Update script completed.');
