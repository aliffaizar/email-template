import { render } from '@react-email/components'
import WelcomeEmail from './welcome-email'

export const EMAIL_TEMPLATES = [
  {
    name: 'Welcome Email',
    template: 'welcome-email',
    html: render(<WelcomeEmail />),
  },
]
