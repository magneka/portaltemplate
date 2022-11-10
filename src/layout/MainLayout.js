import { useContext } from "react";
import LocaleContext from "../context/LocaleContext";
import { IntlProvider} from "react-intl";
import { messages } from './mainLayout.i18n'
import { HashRouter as Router } from "react-router-dom";
import RootContainer from "./RootContainer";
import { LoggedInMenu } from "./LoggedInMenu";
import { Header1Area } from "./Header1Area";
import { MenuArea } from "./MenuArea";
import { ContentArea } from "./ContentArea";
import FooterArea from "./FooterArea";
import { FooterComponent } from "./FooterComponent";
import PortalRoutes from "../menu/PortalRoutes";

const MainLayout = (props) => {

    const locale = useContext(LocaleContext);

    console.log("MainLayout", locale)
  
    // TODO Bruk redux for sjekk om pålogget
    // Egen  return 
  
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Router>
          <RootContainer>
            <Header1Area />       
            <MenuArea>
                {/* TODO her kan vi bruke state for å vise 
                forskjellige menyer pålogget/ikke pålogget */} 
                <LoggedInMenu/>                
            </MenuArea>
                              
            <ContentArea>                
              <PortalRoutes />
            </ContentArea>
  
            <FooterArea>
                <FooterComponent />
            </FooterArea>
          </RootContainer>
        </Router>
      </IntlProvider>
    );
  };
  
  export default MainLayout;