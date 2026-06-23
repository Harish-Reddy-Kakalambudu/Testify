import {Box} from "@mui/material"
import {styles} from "./styles"
import CollectionsSidebar from "./components/sidebar/CollectionsSidebar";
import CollectionsLayout from "./layouts/CollectionLayout";
const Collections = ()=>{

    return(
        <Box className={styles.container}>
            <CollectionsSidebar/>
            <CollectionsLayout/>
        </Box>
    )
} 

export default Collections;
