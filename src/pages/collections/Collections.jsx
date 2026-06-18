import {Box} from "@mui/material"
import {styles} from "./styles"
import CollectionsSidebar from "./components/sidebar/CollectionsSidebar";
const Collections = ()=>{

    return(
        <Box className={styles.container}>
            <CollectionsSidebar/>
        </Box>
    )
} 

export default Collections;
