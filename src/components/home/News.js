import Titlebar from './Titlebar'
import NewsItem from './NewsItem'
const News = () => {
  return (
    <section className="pt-6">
     <Titlebar title="Last News"/>
     <ul className="text-white bg-secondary rounded-lg p-4">
      <NewsItem value="Lorem Episom is an Example Sentence for Designing Websites and Uis"/>
      <NewsItem value="Lorem Episom is an Example Sentence for Designing Websites and Uis"/>
      <NewsItem value="Lorem Episom is an Example Sentence for Designing Websites and Uis"/>
      <NewsItem value="Lorem Episom is an Example Sentence for Designing Websites and Uis"/>
      <NewsItem value="Lorem Episom is an Example Sentence for Designing Websites and Uis"/>
      <NewsItem value="Lorem Episom is an Example Sentence for Designing Websites and Uis"/>
      <NewsItem value="Lorem Episom is an Example Sentence for Designing Websites and Uis"/>
      <NewsItem value="Lorem Episom is an Example Sentence for Designing Websites and Uis"/>
      <NewsItem value="Lorem Episom is an Example Sentence for Designing Websites and Uis"/>
      <NewsItem value="Lorem Episom is an Example Sentence for Designing Websites and Uis"/>
     </ul>
    </section>
    )
}

export default News;