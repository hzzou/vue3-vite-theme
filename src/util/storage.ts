
// 存储菜单主题配置
export const setMenuTheme = (data: any) => {
    localStorage.setItem('menuTheme', JSON.stringify(data));
}

// 获得菜单主题配置
export const getMenuTheme = () => {
    let result = localStorage.getItem('menuTheme');
    // 不为null时返回
    return result ? JSON.parse(result) : {};
}

// 存储主题配置
export const setTheme = (data: any) => {
    localStorage.setItem('Theme', JSON.stringify(data));
}

// 获得主题配置
export const getTheme = () => {
    let result = localStorage.getItem('Theme');
    // 不为null时返回
    return result ? JSON.parse(result) : {};
}