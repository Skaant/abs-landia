import { BuildingDataProps } from "../../../data/buildings.data";
import { AURAS } from "../../../enums/auras.enum";
import { BUILDING_PROPS } from "../../../enums/building-props.enum";
import {
  AuraRangeConnectivityModification,
  AuraRangeDecreasingWighldModification,
} from "../../../types/Auras";
import {
  BuildingPropDataCoresModification,
  BuildingPropJingCost,
  BuildingPropJingMaxModification,
  BuildingPropJingModification,
  BuildingPropJingProdModification,
  BuildingPropWaCost,
  BuildingPropWaMaxModification,
  BuildingPropWaModification,
  BuildingPropWaProdModification,
  BuildingPropWighldExactRangeModification,
} from "../../../types/BuildingProps";
import { Cell } from "../../../types/Cell";
import { applyCellsAuraRangeDecreasingWighldModification } from "../../helpers/applyCellsAuraRangeDecreasingWighldModification";
import { applyCellsAuraRangeConnectivityModification } from "../../helpers/applyCellsAuraRangeConnectivityModification";
import { applyCellsWighldExactRangeModification } from "../../helpers/applyCellsWighldExactRangeModification";
import { applyGlobalRessourcesCostOrModification } from "../../helpers/applyGlobalRessourcesCostOrModification";
import { applyGlobalRessourcesMaxModification } from "../../helpers/applyGlobalRessourcesMaxModification";
import { applyGlobalRessourcesProdModification } from "../../helpers/applyGlobalRessourcesProdModification";
import { PipeStores } from "../types/PipeStores";
import { getBuildingPropsByPriority } from "./getBuildingPropsByPriority";

export function buildingPropsPipe(
  pipeStores: PipeStores,
  props: BuildingDataProps,
  { cell }: { cell?: Cell } = {}
) {
  getBuildingPropsByPriority(props).forEach((prop) => {
    switch (prop.id) {
      case BUILDING_PROPS.WA_COST:
      case BUILDING_PROPS.JING_COST:
      case BUILDING_PROPS.WA_MODIFICATION:
      case BUILDING_PROPS.JING_MODIFICATION:
      case BUILDING_PROPS.DATA_CORES_MODIFICATION:
        pipeStores = applyGlobalRessourcesCostOrModification(
          pipeStores,
          prop as
            | BuildingPropWaCost
            | BuildingPropJingCost
            | BuildingPropJingCost
            | BuildingPropWaModification
            | BuildingPropJingModification
            | BuildingPropDataCoresModification
        );
        break;
      case BUILDING_PROPS.WIGHLD_EXACT_RANGE_MODIFICATION:
        if (!cell) throw new Error("Cell is not defined");
        pipeStores = applyCellsWighldExactRangeModification(
          pipeStores,
          prop as BuildingPropWighldExactRangeModification,
          cell
        );
        break;
      case AURAS.RANGE_DECREASING_WIGHLD_MODIFICATION:
        if (!cell) throw new Error("Cell is not defined");
        pipeStores = applyCellsAuraRangeDecreasingWighldModification(
          pipeStores,
          prop as AuraRangeDecreasingWighldModification,
          cell
        );
        break;
      case AURAS.RANGE_CONNECTIVITY_MODIFICATION:
        if (!cell) throw new Error("Cell is not defined");
        pipeStores = applyCellsAuraRangeConnectivityModification(
          pipeStores,
          prop as AuraRangeConnectivityModification,
          cell
        );
        break;
      case BUILDING_PROPS.WA_PROD_MODIFICATION:
      case BUILDING_PROPS.JING_PROD_MODIFICATION:
        pipeStores = applyGlobalRessourcesProdModification(
          pipeStores,
          prop as
            | BuildingPropWaProdModification
            | BuildingPropJingProdModification
        );
        break;
      case BUILDING_PROPS.WA_MAX_MODIFICATION:
      case BUILDING_PROPS.JING_MAX_MODIFICATION:
        pipeStores = applyGlobalRessourcesMaxModification(
          pipeStores,
          prop as
            | BuildingPropWaMaxModification
            | BuildingPropJingMaxModification
        );
        break;
    }
  });
  return pipeStores;
}
