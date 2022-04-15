import { _electron as electron } from 'playwright';
import { test } from '@playwright/test';

test('Launch electron app', async () => {
    const electronApp = await electron.launch({
        args: ['out/mac/ElectronPlayWright.app/Contents/Resources/app.asar/dist/main/index.cjs'],
        executablePath: './out/mac/ElectronPlayWright.app/Contents/MacOS/ElectronPlayWright',
    });
    const window = await electronApp.firstWindow();
    console.log(await window.title());
    await electronApp.close();
});
