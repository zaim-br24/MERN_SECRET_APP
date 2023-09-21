import React , {useState} from 'react'
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
// import parse from 'html-react-parser';
import Wrapper from '../../assets/Styles/CreatePostWrapper'
import fileToBase64 from '../../utils/fileToBase64';


import {TextEditor, UploadFile, TagsInput, CategoriesInput, Alert} from '../../components/index'
import {FormRow} from '../../components/index'
import {BsCameraVideo} from 'react-icons/bs'
import {HiScissors} from 'react-icons/hi'
import {MdOutlineArticle} from 'react-icons/md'
import {SlPicture} from 'react-icons/sl'

import { useAppContext } from '../../context/appContext';

import sizeFormater from '../../utils/sizeFomater';


export default function CreatePost() {
  const {uploadRedoo, showAlert, displayAlert, uploadVideo, isLoading} = useAppContext()
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [activeBtn, setActiveBtn] = useState('redoo');
  let [words, setWords]= useState(0)
  // -------- redoo
  const [image , setImage] = useState({image: ""});
  const [title , setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState('');
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  // -------- video upload
  const [videoFile, setVideoFile] = useState(null);
  const [description, setDescription] = useState("");
  const [videoFileName, setVideoFileName]= useState();
  const [videoFileSize ,setVideoFileSize] = useState()

  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailFileName, setThumbnailFileName]= useState();
  const [thumbnailFileSize ,setThumbnailFileSize] = useState();

  const uploadedThumnnailSize = sizeFormater(thumbnailFileSize)
  const thumbnailTextSize =( !thumbnailFileName || !thumbnailFileSize) ? null : `${thumbnailFileName} (${uploadedThumnnailSize}MB)`

  // --- handle submit
  const handleUploadSubmit = async (e)=>{
    e.preventDefault()

    if(activeBtn === "redoo"){
      if(!title || !image || !content || !tags || !categories){
        displayAlert()
        return
      }
 
      await uploadRedoo({title, image, content, tags, categories})

    }else if(activeBtn === "video"){
      console.log({title, videoFile, description, tags, categories})
      if(!title || !videoFile || !description || !tags || !categories){
        displayAlert()
        return
      }
      const formData = new FormData();
      formData.append("video", videoFile)
      formData.append("thumbnail", thumbnailFile)
      formData.append("title", title)
      formData.append("description", description)
      formData.append("tags", tags)
      formData.append("categories", categories)
      console.log(formData)
      await uploadVideo(formData)
    }
     // clear values
     setCategories("")
     setTitle("")
     setTags([])
     setImage({image: ""})
     setContent("")
     setEditorState(EditorState.createEmpty())
     setVideoFile(null)
     setVideoFileName("")
     setDescription("")
     setVideoFileSize("")
     setThumbnailFile(null)
     setThumbnailFileSize("")
     setThumbnailFileName("")


    return
  }

// redoo
  const handleTitleChange = (e) =>{
    setTitle(e.target.value)
  }
  const handleContentChange = (data) => {
    setEditorState(data);
    setContent( () => draftToHtml(convertToRaw(editorState.getCurrentContent())),
    [editorState])
  };

  const handleImageChange = async (e) => {

    const file = e.target.files[0];
    try {
      // convert base64
      const base64String = await fileToBase64(file);
      setImage(base64String);
    } catch (error) {
      console.error('Error converting file:', error);
    }
    
  };
  // tags
  const handleTagChange = (e) => {
    setCurrentTag(e.target.value);
  };
 
  const handleTagKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();

      const tagValue = currentTag.trim();
      if (tagValue !== '') {
        setTags([...tags, `#${tagValue}`]);
        setCurrentTag('');
      }
    }
  };

  const removeTag = (tagToRemove) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
  };

  // categories
  const handleCategoryChange = (e) => {
        setCategories(e.target.value);
      };


  const handleClick = (v) =>{
    setActiveBtn(v);
    
  }
  // ----------- video upload

  const handleVideoChange =  (e)=>{
    const file = e.target.files[0]
    if (file) {
      const { name, size } = file;
      setVideoFile(file);
      setVideoFileName(name);
      setVideoFileSize(size);
    }

   
  }
  const handleThumbnailChange =  (e)=>{
    const file = e.target.files[0]
    if(file){
      const {name , size} = file
      setThumbnailFile(file)
      setThumbnailFileSize(size)
      setThumbnailFileName(name)
   }


   
  }
  const handleDescription =  (e)=>{
    if(words < 300){
      setDescription(e.target.value)
      setWords(description.length)
    
    }
    
  }
  // console.log(image, title, content, tags, categories)
  return (
    <Wrapper className='nasted-box'>
      <div  className='container'>
      {showAlert && <Alert/>}
      <h2>Create a new post.</h2>

        <div className='submit-types-container'>
           <button type='click' className='btns-submit' onClick={()=> handleClick("redoo")}> <MdOutlineArticle className='icon'/> Redoo </button>
            <button type='click' className='btns-submit'  onClick={()=> handleClick("video")}> <BsCameraVideo className='icon'/> video </button>
            <button type='click' className='btns-submit'  onClick={()=> handleClick("clipshot")}> <HiScissors className='icon'/> clipshot </button>
          </div>
        <form onSubmit={handleUploadSubmit}>
            <FormRow type='text' name='title'  value={title} placeholder='Title' handleChange={handleTitleChange} />
            {activeBtn === 'redoo' && 
               <>
                <input type="file" name="image" className="file-upload-input" accept='.jpeg, .png, .jpg' onChange={(e)=> handleImageChange(e)}/>
                {image[0]  && <img className='preview' src={`data:image/jpeg;base64,${image}`} alt='image'  />}

               </>
            }
            {activeBtn === "redoo" && <TextEditor editorState={editorState} handleChange={handleContentChange}/>}
            {/* <TextEditor/> */}
            {activeBtn === "video" && <UploadFile 
            handleDescription={handleDescription} 
            handleVideoChange={handleVideoChange} 
            wordsCounter={words} 
            videoFileSize={videoFileSize} 
            videoFileName={videoFileName}
            />
            } 

            
            {activeBtn === "video" && <label htmlFor="thumbnail" class="custum-file-upload">
              <div class="icon">
              <SlPicture className="icon" />
              </div>
              <div class="text">
              <span>{thumbnailTextSize || "Add thumbnail to your video"}</span>
                </div>
                <input type="file" id="thumbnail" accept="image/*" onChange={(e)=>{handleThumbnailChange(e)}}></input>
              </label>
              }



            <TagsInput value={currentTag} handleTagChange={handleTagChange} handleTagKeyPress={handleTagKeyPress} removeTag={removeTag} tags={tags} />
            <CategoriesInput handleCategoryChange={handleCategoryChange} selectedCategory={categories}/>

            <button type='submit' className='btns-submit submit-btn' disabled={isLoading}>{isLoading? "uploading....": "submit"}</button>
        </form>
      </div>
    </Wrapper>
  )
}

// function fileToBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     reader.onload = () => {
//       const base64String = reader.result.split(',')[1]; // Get the Base64 part of the data URL
//       resolve(base64String);
//     };

//     reader.onerror = (error) => {
//       reject(error);
//     };
//   });
// }