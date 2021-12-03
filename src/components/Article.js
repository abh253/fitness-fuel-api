import React, { useContext } from "react";
import { AppContext } from "../Context";

const Article = () => {
    const { article } = useContext(AppContext);

    return (
        <div className='container mx-auto mt-2'>
            <div className='row justify-content-center'>
                {
                    article.map((single, index) => {
                        return (
                            <div className="card mx-2 col-10 col-md col-sm-5 " key={index} style={{ width: "" }}>
                                <img src={single.image} className="card-img-top" alt="article" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{single.title}</h5>
                                    <p className="card-text">{single.sub_title}</p>
                                    <a href="#" className="btn btn-primary mt-auto">Read more</a>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default Article
