var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "transformations-and-eigenvalues",
  "level": "1",
  "url": "transformations-and-eigenvalues.html",
  "type": "Section",
  "number": "1",
  "title": "Transformations and Eigenvalues",
  "body": " Transformations and Eigenvalues   In order to avoid errors, run all cells in order.   Here is definition of a sage function that shows a visualization of a transformation matrix as the input vectors in blue transform into the output vectors in red. Run the cell and enter your matrix in the next cell.   Define a matrix , by editing the code block , to visualize as a transformation. It will take a while to render, don not run the cell twice in order to avoid restarting the computations.   This function visualizes a transformation along with its eigenvectors and eigenspaces, both shown in green.    This sage block creates an interactive function where your manipulation of the matrix occurs immediately. The transformed basis vectors are shown as red arrows.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
