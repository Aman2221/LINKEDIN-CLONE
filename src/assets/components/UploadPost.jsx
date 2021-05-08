import React, { useState, useEffect } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import { Avatar } from "@material-ui/core";
import '../styles/UploadPost.css'
import Feed from "./Feed";
import { useStateValue } from '../../StateProvider';
import { db , storage} from '../../firebase';
import Button from "@material-tailwind/react/Button";

const UploadPost = () => {

    const [{user}] = useStateValue();
    const [data, setData ] = useState([]);
    const [caption, setCaption] = useState();
    const [image, setImage] = useState();
    const handleUpload = (e) => {
        e.preventDefault();
        storage.ref(`images/${image.name}`).put(image).then(() => {
            storage.ref('images').child(image.name).getDownloadURL().then((url) => {
                db.collection('posts').add({
                    caption : caption,
                    imgSrc : url,
                    userName : user.displayName
                })
            })
            alert('Post Added Successfully')
        })
    }
    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot) => {
            setData(snapshot.docs.map(doc => 
                doc.data()));
        })
    }, []);

    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
        <div className='UploadPost'>
            <div className="userInput">
                <Avatar 
                src={user?.photoURL}
                />
                <input type="text" 
                    placeholder='Start a post'
                    onClick={(e) => setShowModal(true)}
                />
            </div>
            <div className="user_attachments">
                <div className='uploads' onClick={(e) => setShowModal(true)}>
                    <i className="far fa-image"></i><p>Photo</p>
                </div>
                <div className='uploads'>
                    <i className="fab fa-youtube"></i><p>Video</p>
                </div>
                <div className='uploads'>
                    <i className="far fa-calendar-check"></i><p>Event</p>
                </div>
                <div className='uploads'>
                    <i className="far fa-newspaper"></i><p>Article</p>
                </div>
            </div>
            <div className="newConversation">
                <p><small>Start a conversation : #Covid19Help</small></p>
            </div>
            {
                data.map((item) => (
                    <div id='feedCompDiv'>
                        <Feed 
                            // id={id}
                            userName = {item.userName}
                            caption = {item.caption}
                            imgSrc = {item.imgSrc}
                        />
                    </div>
                ))
            }
        </div>
        <Modal size="regular" active={showModal} toggler={() => setShowModal(false)}>
            <ModalHeader toggler={() => setShowModal(false)} id='modalHeader'>
                Create a post
            </ModalHeader>

            <ModalBody>
            <div className="modalBody">
                <div className="AvatarName">
                    <Avatar
                    src={user?.photoURL} />
                    <div className="nameSelect">
                        <h4>{user?.displayName}</h4>
                        <select name="cars" id="cars">
                        <option value="volvo">Anyone</option>
                        <option value="saab">AnyOne + Twitter</option>
                        <option value="mercedes">Only Connections</option>
                        <option value="audi">Group Members</option>
                        </select>
                    </div>
                    
                </div>
                <div className="userInputHashtag">
                    <input type="textarea"
                    placeholder='What do you want to talk about'
                    onChange={(e) => setCaption(e.target.value)}
                    />
                    <h4>Add hashtags</h4>
                </div>
                <div id='userPostAttachments'>
                    <input type='file' 
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    <div id='userIcons'>
                        <i className="fas fa-plus"></i>
                        <i className="far fa-image"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="far fa-newspaper"></i>
                        <small><i class="far fa-comments"></i>Anyone</small>
                    </div>
                    <div className='userButtons'>
                        <button id='postBtn' type='submit' onClick={handleUpload}>Post</button>
                    </div>
                </div>
                <div className='userButtonsChoose'>
                    <div>
                        <button>Celebrate an occasion</button><br/>
                        <button>Share that you are hiring</button>
                        <button>Find an expert</button>
                    </div>
                    <div>
                        <button>Create a poll</button><br/>
                        <button>Offer Help</button>
                    </div>
                </div>
            </div>
            </ModalBody>

            <ModalFooter>
            <Button 
            color="red"
            buttonType="link"
            onClick={(e) => setShowModal(false)}
            ripple="dark"
            >
            Close
          </Button>
            </ModalFooter>
        </Modal>
        </>
    )
}

export default UploadPost
