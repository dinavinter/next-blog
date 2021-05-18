import { getAllPostIds, getPostData } from '../../lib/posts'
import PostLayout,{withPostLayout} from "../../components/PostLayout";
import React from "react";

export default function Post({ postData }) {
    return (
        <PostLayout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </PostLayout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

 