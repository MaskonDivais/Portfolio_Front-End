import React from 'react'
import module from "./TechnicalService.module.css"
import FormButtom from '../Button/FormButton/FormButtom'



const TecnicalServise = () => {


  return (
    <div className={module.Conteiner}>
      <div className={module.ConteinerForm}>
        <form className={module.Form}>

          <div className={module.Logotype} />
          <p className={module.P1}>Technical support service</p>
          <p className={module.P2}>Tell us what roles we have already met and we will try to help you as soon as possible.</p>

          <label className={module.LabelName}>Name: <input className={module.Input} type="text" placeholder="User Name"></input></label>
          <label className={module.LabelMail}>Mail: <input className={module.Input} type="text" placeholder="User Mail"></input></label>

          <label className={module.LabelProblem}>Problem: <textarea name="user_message" required className={module.Textarea} cols={50} id="message" rows={5}></textarea></label>

          <label className={module.LabelPriority} >Priority:
            <select className={module.LabelSelect} id="Priority" name="Priority">
              <option className={module.LabelOption} value="Urgently">Urgently</option>
              <option className={module.LabelOption} value="Standard">Standard</option>
              <option className={module.LabelOption} value="Leisurely">Leisurely</option>
            </select>
          </label>

          <FormButtom />

        </form>
      </div>
      <div className={module.ConteinerQuestion}>
        <div className={module.Question}>
          <p className={module.FAQ}>Frequently Asked Questions</p>
          <ul className={module.ListQuestion}>
            <li className={module.liQ}>Configure playback on multiple devices?</li>
            <li className={module.liQ}>Download songs for offline listening?</li>
            <li className={module.liQ}>Set up notifications for new releases?</li>
            <li className={module.liQ}>Share a song or playlist with friends?</li>
            <li className={module.liQ}>Find a song or artist by keyword?</li>
            <li className={module.liQ}>Adjust audio playback quality?</li>
            <li className={module.liQ}>Create your own playlist?</li>
            <li className={module.liQ}>Manage playback queue?</li>
            <li className={module.liQ}>Add a song to a playlist?</li>
            <li className={module.liQ}>Use the radio feature?</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default TecnicalServise