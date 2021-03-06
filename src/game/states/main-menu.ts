export default class MainMenu extends Phaser.State {
  private playKey: Phaser.Key;
  private playButton: Phaser.Button;

  public create(): void {
    this.playKey = this.input.keyboard.addKey(Phaser.KeyCode.ENTER);
    this.add.sprite(0, 0, "background");
    this.add.text(30, 30, "Press [ENTER] to Play!", {
      fill: "#0f0",
      fontSize: 32,
    });
    this.playButton = this.add.button(30, 30, "null", () => {
      this.state.start("play");
    });
  }

  public update(): void {
    if (this.playKey.isDown) {
      this.state.start("play");
    }
  }
}
