import {Card, ImageList, ImageListItem} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AddPlantButton from "../../../Buttons/FabButtons/AddPlantButton";


const useStyles = makeStyles((theme) => ({
    previewCard: {
        background: "transparent",
        margin: 10,
        padding: 15,
        borderRadius: "10%",
        boxShadow: "-10px -10px 24px #fff, 10px 10px 24px rgba(174,170,192,0.4), 10px 10px 10px #fff inset, -10px -10px 10px rgba(174,170,192,0.25) inset",
    },
    probability: {
        width: "50px",
        borderRight: "solid 1px black",
        padding: "5px",
        marginRight: "8px"
    },
    previewContent: {
        padding: "8px",
    },
    addButton: {
        margin: theme.spacing(1),
        width: theme.spacing(3),
        height: theme.spacing(3),
        padding: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        boxShadow: '-5px -5px 5px rgba(255,255,255, 1), 5px 5px 5px rgba(163,172,161, 0.4)',
        borderRadius: "50%",
        fontWeight: "normal",
        alignSelf: "center",
    }
}));

export default function SuggestionEntry({suggestion}) {

    const classes = useStyles();
    const previewImages = suggestion.similar_images;
    const probability = suggestion.probability * 100;
    const prob = probability.toString().substring(0, 4) + "%";

    function fuseCommonNames() {
        if (suggestion.plant_details.common_names != null) {
            const commonNames = suggestion.plant_details.common_names;
            const comNamesSliced = commonNames.slice(0, 3);
            console.log(comNamesSliced.toString())
            return comNamesSliced.join(" | ");
        }
        return "";
    }


    return (
        <Card sx={{display: 'flex'}} className={classes.previewCard}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flex: '1 0 auto'}} className={classes.previewContent}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', pb: 1}}>
                        <Box className={classes.probability}>
                            <Typography>{prob}</Typography>
                        </Box>
                        <Typography component="div" variant="title">
                            {suggestion.plant_name}
                        </Typography>
                    </Box>
                    <Typography variant="subtitle2" component="div">
                        {fuseCommonNames()}
                    </Typography>
                </CardContent>
            </Box>
            <Box>
                <ImageList sx={{width: 500, height: 450}} cols={2} rowHeight={164}>
                    {previewImages.map((previewImage) => (
                        <ImageListItem key={previewImage.id}>
                            <img
                                src={`${previewImage.url}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${previewImage.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={"preview of suggested plant"}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', pt: 1, }}>
                <AddPlantButton/>
            </Box>
        </Card>
    );
}