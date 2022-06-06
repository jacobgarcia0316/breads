const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title}) {
    return (
      <Default title={title}>
        <h2>Index Page</h2>
        <ul>
          {
            breads.map((bread, index)=> {
                return (
                    <li key={index}>
                    <a href={`/breads/${index}`}>
                    {bread.name}
                    </a>
                    </li>
            )
        })
}

        </ul>
        {/* <p> i have {breads[0].name} bread woo</p> */}
      </Default>
    )
}

module.exports = Index
