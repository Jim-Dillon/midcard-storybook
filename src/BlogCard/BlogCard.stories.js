import BlogCard from "./BlogCard";

export default {
    title: 'BlogCard',
    component: BlogCard
}

export const BlueBorder = () => <BlogCard />
export const NoBorder = () => <BlogCard 
border="no-border"
imageBorder="no-border"
imageWidth='borderless-image-width' />
export const Featured = () => <BlogCard minutealt="blue-minute-background" border="featured-border"
imageBorder="no-border"
cardback='white-background' />