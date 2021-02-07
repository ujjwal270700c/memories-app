import React, { useContext,useEffect } from "react";
import PostContext from "./PostContext";
import { Grid, CircularProgress } from '@material-ui/core';
import PostItem from './PostItem'
import useStyles from './allpoststyle';



const AllPost = () => {
    const postContext = useContext(PostContext);
    const {posts,GetPost} =postContext;
    const classes = useStyles();
  
    useEffect(()=>{
        GetPost();
      },[]);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
              {posts.map((post) => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                  <PostItem post={post}  />
                </Grid>
              ))}
            </Grid>
        )
    )
}

export default AllPost
