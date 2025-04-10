import MailOutline from '@mui/icons-material/MailOutline'
import Button from '@mui/material/Button'

export default function ButtonEmailMe({email, ...props}) {
  return (
    <Button href={`mailto:${email}`} variant="outlined" color="white" sx={{gap: "6px"}} {...props}>
        <MailOutline/>
        Contact Me
    </Button>
  )
}
