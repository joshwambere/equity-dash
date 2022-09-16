import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.loginpage}>
        <div className={styles.form}>
          <form className={styles.loginform}>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>login</button>
            <p className={styles.message}>Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      </div>
    </div>
  )
}
