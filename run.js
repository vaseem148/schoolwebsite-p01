import { execSync } from 'child_process';
import fs from 'fs';

try {
    const result = execSync('npx eslint .', { encoding: 'utf-8' });
    fs.writeFileSync('lint.txt', result, 'utf-8');
} catch (error) {
    fs.writeFileSync('lint.txt', error.stdout || error.message, 'utf-8');
}
