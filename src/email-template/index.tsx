import { render } from '@react-email/components'
import WelcomeEmail from './welcome-email'
import ResetPassword from './reset-password'
import PortfolioEmail from './portfolio-email'

export const EMAIL_TEMPLATES = [
  {
    name: 'Portfolio Email',
    template: 'portfolio-email',
    html: render(<PortfolioEmail />),
    image: '/images/portfolio.png',
  },
  {
    name: 'Welcome Email',
    template: 'welcome-email',
    html: render(<WelcomeEmail />),
    image: '/images/welcome.png',
  },
  {
    name: 'Reset Password',
    template: 'reset-password',
    html: render(<ResetPassword />),
    image: '/images/reset.png',
  },
]
