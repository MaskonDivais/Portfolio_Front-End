import React from 'react'
import module from "./TechnicalService.module.css"
import FormButtom from '../Button/FormButton/FormButtom'



const TecnicalServise = () => {


  return (
    <div className={module.Conteiner}>
      <div className={module.ConteinerForm}>
        <form className={module.Form}>

          <div className={module.Logotype} /><div className={module.Line}/>

          <label className={module.LabelName}>Name: <input className={module.Input} type="text" placeholder="Preferred Name"></input></label>
          <label className={module.LabelMail}>Mail: <input className={module.Input} type="text" placeholder="User Mail"></input></label>
          <label className={module.LabelTitle}>Title: <input className={module.InputT} type="text" placeholder="Brief description of the problem"></input></label>

          <label className={module.LabelQues}>Frequently Questions:
            <select className={module.Select} id="phone" name="phone">
              <option value="iphone 6s">Other question</option>
              <option value="iphone 6s">Configure playback on multiple devices?</option>
              <option value="lumia 950">Download songs for offline listening</option>
              <option value="nexus 5x">Set up notifications for new releases?</option>
              <option value="galaxy s7">Share a song or playlist with friends?</option>
              <option value="galaxy s7">Find a song or artist by keyword?</option>
              <option value="galaxy s7">Create your own playlist?</option>
              <option value="galaxy s7">Manage playback queue?</option>
              <option value="galaxy s7">Add a song to a playlist?</option>
              <option value="galaxy s7">Use the radio feature?</option>
            </select>
          </label>

          <label className={module.LabelProblem}>Problem: <textarea name="user_message" required className={module.Textarea} cols={50} id="message" rows={5}></textarea></label>

          <FormButtom>Send</FormButtom>

        </form>
      </div>

    </div>
  )
}

export default TecnicalServise