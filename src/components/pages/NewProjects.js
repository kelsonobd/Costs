import styles from './NewProjects.module.css'
import ProjectForm from '../project/ProjectForm';

function NewProjects() {
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto ara depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto" />
        </div>
    )
}

export default NewProjects;