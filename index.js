const Notification = props => {
  //  Write your code here.
  const {imageUrl, imageCls, messageCardcls, messageContent} = props.source
  return (
    <div className={messageCardcls}>
      <img src={imageUrl} className={imageCls} />
      <p>{messageContent}</p>
    </div>
  )
}
const sourcePrimary = {
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/primary-icon-img.png',
  imageCls: 'msg-image',
  messageCardcls: 'msg-card-primary msg-card',
  messageContent: 'Information Message',
}

const sourceSuccess = {
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/success-icon-img.png',
  imageCls: 'msg-image',
  messageCardcls: 'msg-card-success msg-card',
  messageContent: 'Success Message',
}
const sourceWarning = {
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/warning-icon-img.png',
  imageCls: 'msg-image',
  messageCardcls: 'msg-card-warning msg-card',
  messageContent: 'Warning Message',
}
const sourceDanger = {
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/danger-icon-img.png',
  imageCls: 'msg-image',
  messageCardcls: 'msg-card-danger msg-card',
  messageContent: 'Danger Message',
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Notifications</h1>
    <Notification source={sourcePrimary} />
    <Notification source={sourceSuccess} />
    <Notification source={sourceWarning} />
    <Notification source={sourceDanger} />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
