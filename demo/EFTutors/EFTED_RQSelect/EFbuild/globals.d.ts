declare namespace EFTut_Suppl.$GLOBAL {
    class CONST {
        static readonly TUTORCONTAINER: string;
        static readonly NEXTSCENE: string;
        static readonly PREVSCENE: string;
        static readonly MOUSE_MOVE: string;
        static readonly MOUSE_DOWN: string;
        static readonly MOUSE_UP: string;
        static readonly MOUSE_CLICK: string;
        static readonly DOUBLE_CLICK: string;
        static readonly CLICK: string;
    }
}
declare namespace EFTut_Suppl.$GLOBAL {
    class $GLOBAL {
        [key: string]: any;
        $preEnterScene(scene: any): void;
        $nodeConstraint(nodeId: string, constraintId: string): boolean;
    }
}
