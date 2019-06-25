
class Card {
    constructor(domElement) {
      // assign this.domElement to the passed in domElement
      this.domElement = domElement;
      console.log(this.domElement);
      this.domElement.addEventListener('click', this.expandArticle.bind(this));
    }
  
    expandArticle() {
      // Using our reference to the domElement, toggle a class to expand or hide the article.
      console.log("I was clicked!")
      this.domElement.classList.toggle("active");

      var panel = this.domElement.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    }
}

  const articles = document.querySelectorAll('.gradeCard');
  
  articles.forEach(function(article){
    return new Card(article);
  }); 
