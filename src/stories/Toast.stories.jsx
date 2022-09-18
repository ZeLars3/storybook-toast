import { POSITIONS, TOAST_TYPES } from 'constants/index'
import { toast } from 'services'

export default {
  title: 'UI/Toast',
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          TOAST_TYPES.Warning,
          TOAST_TYPES.Error,
          TOAST_TYPES.Info,
          TOAST_TYPES.Success,
        ],
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
    position: {
      control: {
        type: 'select',
        options: [
          POSITIONS.Top_Right,
          POSITIONS.Top_Left,
          POSITIONS.Bottom_Right,
          POSITIONS.Bottom_Left,
        ],
      },
    },
    autoDelete: {
      control: {
        type: 'boolean',
      },
    },
    animation: {
      control: {
        type: 'select',
        options: [
          'swipe-top',
          'swipe-bottom',
          'swipe-right',
          'swipe-left',
        ],
      },
    },
    timeToDelete: {
      control: {
        type: 'number',
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
      },
    },
  },
}

const Template = args => {
  return toast.addToast(
    args.description,
    args.backgroundColor,
    args.padding,
    {
      type: args.type,
      position: args.position,
      autoDelete: args.autoDelete,
      delay: args.timeToDelete,
      animation: args.animation,
    },
  )
}

export const Default = Template.bind({})
Default.args = {
  type: TOAST_TYPES.Info,
  description: 'Example',
  position: POSITIONS.Top_Right,
  autoDelete: true,
  timeToDelete: 2000,
  animation: '',
  padding: '20px',
}
