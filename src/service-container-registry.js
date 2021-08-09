import awilix from "awilix";
import * as Slot from "sc-slot-game-base";
import { FameModel, FreespinModel, RoundModel } from "./models";
import { SlotHttpRouter } from "sc-slot-game-base/src/routers";

const { asValue, asClass } = awilix;

export class GameHttpRouter extends SlotHttpRouter {
    init(app) {
        app.get("/api/onlineusers", (_req, res) => this.handleOnlineUsers(res));
    }

    handleOnlineUsers(res) {
        try {
            res.send("handleOnlineUsers");
            //  const onlineUsers = this.collectOnlineUsers();

            // res.send(onlineUsers);
        } catch (error) {
            res.send({ error: true });
        }
    }
}

export default class ServiceContainerRegistry extends Slot.SlotContainerRegistry {
    registerModels() {
        super.registerModels();

        this.container.register({
            roundsRepository: asValue(RoundModel),
            famesRepository: asValue(FameModel),
            freeSpinsRepository: asValue(FreespinModel),
        });
    }

    registerRouters() {
        super.registerRouters();

        this.container.register({
            httpRouter: asClass(GameHttpRouter),
        });
    }
}
