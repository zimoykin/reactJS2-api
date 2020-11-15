import React from 'react'
import * as K from '../Models/Constants'
import Loader from './Loader'


function SendPost(title, description) {

    console.log('start')
    //npm install base-64
    const base64 = require('base-64');

    var headers = new Headers();
    headers.append("Authorization", "Basic " + base64.encode(K.USER + ":" + K.PASSWORD));
    headers.append('Content-Type', 'application/json')

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ title: title, description: description })
    };

    fetch(K.ADDRESS + '/api/posts', requestOptions)
        .then(response => response.json())
        .then(posts => {
            setTimeout(() => {
                console.log('done')
            }, K.TIMEOUT)
        })
        .catch(e => {
            console.log(e)
        })

}

class NewPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            placeid: '',
            tags: ''
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        SendPost(this.state.title, this.state.description)

        this.setState({ title: '' });
        this.setState({ description: '' });

    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }
    handleChangeDescription(event) {
        this.setState({ description: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="d-block p-2 bg-light text-white">

                    <div className='container postHeader'>
                        <h1 className='text'>
                            Create new post
                        </h1>
                    </div>

                    <div className='container'>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span className="input-group-text">Title</span>
                            </div>
                            <textarea className="form-control" value={this.state.title} onChange={this.handleChangeTitle} ></textarea>
                        </div>
                    </div>

                    <div className='container'>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Description </span>
                            </div>
                            <textarea className="form-control" type="text" value={this.state.description} onChange={this.handleChangeDescription} ></textarea>
                        </div>

                    </div>

                    <div className='container'>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">TAGS </span>
                            </div>
                            <textarea className="form-control" type="text" value={this.state.description} onChange={this.handleChangeDescription} ></textarea>
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> Place </span>
                            </div>
                            <select>
                                <option value="grapefruit">Грейпфрут</option>
                                <option value="lime">Лайм</option>
                                <option selected value="coconut">Кокос</option>
                                <option value="mango">Манго</option>
                            </select>
                        </div>

                    </div>


                    <div className='container'>
                        <input className="btn btn-outline-secondary w-25" type="submit" value="Отправить" />
                    </div>

                </div>
            </form>
        )

    }

}


export default NewPost;