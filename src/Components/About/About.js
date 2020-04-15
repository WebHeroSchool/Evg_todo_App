import React from 'react';
import styles from './About.module.css';
import {Octokit} from '@octokit/rest';

const octokit = new Octokit();
class About extends React.Component {
    state = {
        username: 'Evg-msk',
        isLoading: true,
        repoList: [],
        fetchFail: false,
        errorMessage: '',
        infoOfUser: []
    };

    componentDidMount() {
        octokit.repos.listForUser({
            username: this.state.username
        }).then( ({ data }) => {
            this.setState({
                repoList: data,
                isLoading: false
            });
        })
        .catch(err => {
            this.setState({
                isLoading: false,
                fetchFail: true,
                errorMessage: err
            });
        });

        octokit.users.getByUsername({
            username: this.state.username
        }).then( ({ data }) => {
            this.setState({
                infoOfUser: data,
                isLoading: false
            });
        })
        .catch(err => {
            this.setState({
                isLoading: false,
                fetchFail: true,
                errorMessage: err
            });
        });
    }

    render() {
        const {isLoading, repoList, fetchFail, errorMessage, infoOfUser} = this.state;
        const Preloader = () => <span className={styles.preloader}> </span>
        return (
            <div className={styles.boxAbout}>
                {isLoading ? <Preloader/> :
                    <div className={styles.info}>
                        <h1> Обо мне: </h1>
                            {fetchFail ? 'Упс... Что-то пошло не так :( - ' + errorMessage :
                                <div>
                                    <h2> <span className={styles.name}> Мое имя:</span> {infoOfUser.name} </h2>
                                    <img src={infoOfUser.avatar_url} alt='Здесь должно быть фото' className={styles.avatar}/>
                                    <p> "{infoOfUser.bio}" </p>
                            <h3> Список моих репозиториев на GitHub: </h3>
                            <ol>
                                {repoList.map(repo => (<li key={repo.id}>
                                    <a href={repo.html_url} target='_blank'> {repo.name} </a>
                                </li>))}
                            </ol>
                        </div>}
                    </div>}
            </div>
            )
        }
    }

export default About;