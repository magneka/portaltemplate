import { messages } from "./welcomeContainer.i18n";

export const useWelcomeContainer = (locale) => {

    const showToasts = true;
    
    const localeMessages = messages[locale]   

    return {
        localeMessages, showToasts
    }    
}