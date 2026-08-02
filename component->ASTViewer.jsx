import "./ASTViewer.css";



function ASTNode({ node, level = 0 }) {


    if (!node) {

        return null;

    }



    return (

        <div
            className="ast-tree-node"
            style={{
                marginLeft: level * 20
            }}
        >


            <div className="ast-node">

                🌿 {node.name}

            </div>





            {

                node.children &&

                node.children.length > 0 &&

                node.children.map(

                    (child, index) => (


                        <ASTNode

                            key={index}

                            node={child}

                            level={level + 1}

                        />


                    )

                )


            }





        </div>

    );


}







function ASTViewer({ astTree }) {


    return (


        <div className="ast-viewer">



            <h2>
                AST Explorer 🌳
            </h2>





            {


                astTree ?


                (


                    <ASTNode

                        node={astTree}

                    />


                )


                :


                (

                    <p>

                        Compile code to generate AST...

                    </p>

                )


            }




        </div>


    );


}



export default ASTViewer;
