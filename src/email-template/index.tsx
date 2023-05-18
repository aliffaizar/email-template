import { render } from '@react-email/components'
import WelcomeEmail from './welcome-email'
import ResetPassword from './reset-password'
import PortfolioEmail from './portfolio-email'

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  'https://email-template-aliffaizar.vercel.app'

export const EMAIL_TEMPLATES = [
  {
    name: 'Portfolio Email',
    template: 'portfolio-email',
    node: render(PortfolioEmail()),
    html: render(<PortfolioEmail />),
    image: `${BASE_URL}/images/portfolio.png`,
  },
  {
    name: 'Welcome Email',
    template: 'welcome-email',
    node: render(WelcomeEmail()),
    html: render(<WelcomeEmail />),
    image: `${BASE_URL}/images/welcome.png`,
  },
  {
    name: 'Reset Password',
    template: 'reset-password',
    node: render(ResetPassword()),
    html: render(<ResetPassword />),
    image: `${BASE_URL}/images/reset.png`,
  },
]
