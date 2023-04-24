export default function Post(){
    return(
        <div className="post">
      <div className="image">
        <img src="https://www.un.org/en/genocideprevention/images/atrocity-crimes/war-crimes.jpg" alt="War Crime "></img>
      </div>
      <div className="texts">
      <h2>War Crime All Over The World</h2>
      <p className="info">
       <a className="author">Subash Lama</a>
       <time>2023-04-15 12:45 </time>
      </p>
        <p className="summary">Even though the prohibition of certain behavior in the conduct of armed conflict 
          can be traced back many centuries, the concept of war crimes developed particularly
          at the end of the 19th century and beginning of the 20th century, when international 
          humanitarian law, also known as the law of armed conflict, was codified. 
        </p>
      </div>
    </div>
    );
}