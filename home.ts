import {Page} from '@playwright/test';

export async function clickShort(page:Page){
    const Short= page.locator('//select[@class="product_sort_container"]'); 
    await Short.selectOption('lohi') ;
}
