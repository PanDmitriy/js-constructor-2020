import image from './assets/image.jpg'
import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from "/classes/block.js"


const text = 'Приложение на чистом JS, без использования фреймворков.'

export const model = [
    new TitleBlock ('Конструктор сайтов на чистом JavaScript!', { tag: 'h2', styles: {
                background: 'linear-gradient(to right, #36211d, #3b8ec5)',
                color: '#ffffff',
                padding: '1.5rem',
                'text-align': 'center'
            }
        }
    ),
    new TextBlock (text, { styles: {
                background: 'linear-gradient(to right, #36211d, #3b8ec5)',
                color: '#fff',
                padding: '1rem',
                'font-weight': 'bold'
            }
        }
    ),
    new ColumnsBlock ([
            'Учись',
            'Твори',
            'Вытворяй'
        ],
            { styles: {
                background: 'linear-gradient(to bottom, #36211d, #3b8ec5)',
                color: '#fff',
                padding: '2rem',
                'font-weight': 'bold'
            }
        }
    ),
    new ImageBlock (image, { styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center'
            }
        }
    )
]