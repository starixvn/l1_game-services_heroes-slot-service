import AppConfigs from "../../src/app-configs";
import GameSettings from "../../src/game-settings";

describe("GameSettings", () => {
    it("bet choices should have enough 25 paylines", () => {
        // act
        const betChoices = GameSettings.choices;

        // assert
        expect(betChoices.length).toEqual(25);
    });

    it("freeSpinLiveSeconds should get from appropriate config", () => {
        // assert
        expect(GameSettings.freeSpinLiveSeconds).toEqual(AppConfigs.freeSpinLiveSeconds);
    });

    it("freeSpinLiveSeconds should get from appropriate config", () => {
        // assert
        expect(GameSettings.bonusLiveSeconds).toEqual(AppConfigs.bonusLiveSeconds);
    });
});
