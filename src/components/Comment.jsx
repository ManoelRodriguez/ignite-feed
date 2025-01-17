import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'
import perfilHomem from '../assets/perfil-homem.jpg'

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {

        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={perfilHomem} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Robson Vasquez</strong>
                            <time title="18 de dezembro às 15:40" datetime="2024-12-18 15:40:03">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}