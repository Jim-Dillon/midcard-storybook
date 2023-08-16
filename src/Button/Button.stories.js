import Button from "./Button"

export default {
    title: 'Button',
    component: Button
}

export const PrimaryNav = () => <Button variant='primary'>Contact</Button>
export const ReadMore = () => <Button variant='primary'>Read More</Button>
export const Secondary = () => <Button variant='secondary'>See more like this</Button>
export const GameActive = () => <Button variant='game-active'>PLAY GAME</Button>
export const GameDisabled = () => <Button variant='game-disabled'>NEXT HAND</Button>




