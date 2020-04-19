class KeyboardManager {
    protected keysPressed: { [key: string]: boolean } = {};

    constructor() {
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);

        window.addEventListener('keyup', this.onKeyUp);
        window.addEventListener('keydown', this.onKeyDown);
    }

    isKeyPressed(key: string) {
        return !!this.keysPressed[key];
    }

    destroy() {
        window.removeEventListener('keyup', this.onKeyUp);
        window.removeEventListener('keydown', this.onKeyDown);
    }

    protected onKeyUp(event: KeyboardEvent) {
        this.keysPressed[this.parseKey(event.key)] = false;
    }

    protected onKeyDown(event: KeyboardEvent) {
        this.keysPressed[this.parseKey(event.key)] = true;
    }

    protected parseKey(key: string) {
        if (key === 'Down') {
            return 'ArrowDown';
        } else if (key === 'Up') {
            return 'ArrowUp';
        } else if (key === 'Left') {
            return 'ArrowLeft';
        } else if (key === 'Right') {
            return 'ArrowRight';
        } else if (key === 'Esc') {
            return 'Escape';
        }

        return key;
    }
}

export default KeyboardManager;
