import "../App.css";
import {SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import { Home, CreditCard, ImportContacts } from '@material-ui/icons';

export default function NavBar() {
    // See https://material-ui.com/components/drawers/#swipeable
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const routesWithIcons = [
        {name: "Home", icon: <Home/>},
        {name: "My Stocks", icon: <CreditCard/>},
        {name: "News", icon: <ImportContacts/>}
    ];

    return (
        <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            variant="permanent"
            anchor="left"
        >
            <List>
                {routesWithIcons.map(({name, icon}) => (
                    <ListItem button key={name}>
                        <ListItemIcon children={icon} />
                        <ListItemText primary={name} />
                    </ListItem>
                ))}
            </List>
        </SwipeableDrawer>
    );
}