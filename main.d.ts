// Type definitions for chfritz:easycron meteor package
// Definitions by: Petr Janů <https://github.com/pjanu>

interface CronOptions {
    minute?: number,
    hour?: number,
    day?: number
}

interface CronInterface {
    new(callback: ()=>void, options: CronOptions);
}

declare const Cron: CronInterface;

declare module 'meteor/chfritz:easycron' {
    export const Cron: CronInterface;
}