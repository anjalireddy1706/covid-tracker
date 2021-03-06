import React from "react";
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from "react-countup";
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards=({data:{ cases, recovered, deaths, lastUpdate}})=>{

    if(!cases){
        return 'Loading...';
    }
function getCurrentDate(separator='  '){

let myCurrentDate = new Date()
let date = myCurrentDate.getDate();
let month = myCurrentDate.getMonth() + 1;
let year = myCurrentDate.getFullYear();

return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
}
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"><CountUp start={0} end={cases} duration={2.5} separator=","/></Typography>
                        <Typography color="textSecondary">{getCurrentDate()}</Typography>
                        <Typography variant="body2" className="typography1">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"><CountUp start={0} end={recovered} duration={2.5} separator=","/></Typography>
                        <Typography color="textSecondary">{getCurrentDate()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths} duration={2.5} separator=","/></Typography>
                        <Typography color="textSecondary">{getCurrentDate()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}
export default Cards;
