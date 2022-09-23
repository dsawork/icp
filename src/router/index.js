import MainPage from "../pages/MainPage/MainPage";
import StartTrading from "../pages/StartTrading/StartTrading";
import TradingPlatforms from "../pages/TradingPlatforms/TradingPlatforms";

export const RouteNames = {
    MAIN: '/',
    START_TRADING: '/start-trading',
    TRADING_PLATFORMS: '/trading-platforms',
    EDU_TOOLS: '/edu-tools',
    ABOUT_US: '/about-us',
    PARTNERS: '/partners',
    SUPPORT: '/support',
};

export const routes = [
    { path: RouteNames.MAIN, element: MainPage },
    { path: RouteNames.START_TRADING, element: StartTrading },
    { path: RouteNames.TRADING_PLATFORMS, element: TradingPlatforms }
];
