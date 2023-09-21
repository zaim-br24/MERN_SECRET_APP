import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/Styles/ProfileWrapper'
import { Alert, FormRow } from '../../components/index'
import {RiImageEditLine} from 'react-icons/ri'
import userAvatar from '../../assets/images/user.png'
import {TagsInput} from  '../../components/index'


export default function Profile() {
  const { user, showAlert, displayAlert, updateUser, isLoading } = useAppContext()
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user?.email)
  const [lastName, setLastName] = useState(user?.lastName)
  const [avatar, setAvatar] = useState(user?.avatar)
  const [avatarFile, setAvatarFile] = useState(null)
  const [skills, setSkills] = useState(user?.skills)
  const [currentSkill , setCurrentSkill] = useState("")
  const [isEditProfile, setEditProfile] = useState(false)

  // useEffect(()=>{
  //   setAvatar(user.avatar)
  // }, [avatar])
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !lastName ) {
      displayAlert()
      return
    }
    const formData = new FormData();
    formData.append("avatar", avatarFile)
    formData.append("email", email)
    formData.append("name", name)
    formData.append("lastName", lastName)
    formData.append("skills", skills)

  await updateUser(formData)   
   setAvatar(user.avatar)
  //  toggleEditProfile()
  }
  const handleAvatarChange = (e)=>{
    const file = e.target.files[0]
    setAvatarFile(file)
    setAvatar(user.avatar)
  }
  const toggleEditProfile =  ()=>{
    setEditProfile(!isEditProfile)
  }
  // tags
  const handleTagChange = (e) => {
    setCurrentSkill(e.target.value);
  };
 
  const handleTagKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();

      const skillValue = currentSkill.trim();
      if (skillValue !== '') {
        setSkills([...skills, `#${skillValue}`]);
        setCurrentSkill('');
      }
    }
  };
  const removeTag = (skillToRemove) => {
    const updatedSkill = skills.filter(skill => skill !== skillToRemove);
    setSkills(updatedSkill);
  };
  return (
    <Wrapper className='nasted-box'>
      <div className='profile-container'>
          <div className='glass-background box profile'>
          <div className='user-profile'>

            <div className='user-profile-container'>

              <div className='user-image' >
                <img src={avatar} alt='avatar' />
              </div>

              <div className='user-info'>
                <p className='user-name'>{name} {lastName}</p>
                <p className='personal-account'>(Your personal account)</p>
              </div>

            </div>
            <button type='click' className='profile-btns edit-btn' onClick={toggleEditProfile}>{!isEditProfile?"Edit Profile": "Disorder Edit"} </button>
          </div>

          <div className='user-friends'>
                <p className='user-profile-title'>My Friends</p>
                <Link><span>Followers </span> <span>{user.followers}</span></Link>
                <Link><span>Following</span> <span>{user.following}</span></Link>
          </div>

          <div className='user-skills'>
                <p className='user-profile-title'>My Skills</p>
                <div className='skills'>
                  {skills.map((skill, index)=>{
                    return(
                      <div key={index}><span>{skill}</span></div>
                    )
                  })}

                </div>
          </div>
          </div>

          <div className='glass-background box activities'>
              activities
          </div>

          <div className='glass-background box budget'>
              budget
          </div>
          <div className='glass-background box statistics'>
              statistics
          </div>
          <div className='glass-background box posts'>
              posts
          </div>
      </div>

        {/* Update profile */}

      {isEditProfile && 
      <div className='glass-background update-profile'>
      <form className='form' onSubmit={handleSubmit}>
      <h3> Edite Profile </h3>
          {showAlert && <Alert />}
      {/* name */}
      <div className='form-center'>
        <FormRow
          labelText='first name'
          type='text'
          name='name'
          value={name}
          handleChange={(e) => setName(e.target.value)}
        />
        <FormRow
          labelText='last name'
          type='text'
          name='lastName'
          value={lastName}
          handleChange={(e) => setLastName(e.target.value)}
        />
        <FormRow
          labelText='email'
          type='email'
          name='email'
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
         <FormRow
          labelText='Profile'
          type='file'
          name='avatar'
          handleChange={(e) => handleAvatarChange(e)}
          accept="image/*"
        />
        <TagsInput 
          className="form-input"
          value={currentSkill} 
          handleTagChange={handleTagChange} 
          handleTagKeyPress={handleTagKeyPress} 
          removeTag={removeTag} 
          tags={skills} 
          placeholder="Enter skills"
        />

        <button className='btn btn-block' type='submit' disabled={isLoading}>
          {isLoading ? 'Please Wait...' : 'save changes'}
        </button>
      </div>
    </form>
    </div>
      }        

    </Wrapper>
  )
}
