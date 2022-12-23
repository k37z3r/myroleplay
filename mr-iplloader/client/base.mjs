import * as native from 'natives';
import { EnableIpl, getInteriorByType } from 'mr-functions';
export let Base = {
    ipl : ["post_hiest_unload", "refit_unload", "FINBANK", "Coroner_Int_on", "coronertrash", "CS1_02_cf_onmission1", "CS1_02_cf_onmission2", "CS1_02_cf_onmission3", "CS1_02_cf_onmission4", "farm", "farmint", "farm_lod", "farm_props", "des_farmhouse", "FIBlobby", "atriumglmission", 'dt1_05_hc_end', 'dt1_05_hc_req', 'dt1_05_hc_remove', "FruitBB", "sc1_01_newbill", "hw1_02_newbill", "hw1_emissive_newbill", "sc1_14_newbill", "dt1_17_newbill", "id2_14_during_door", "id2_14_during1", "facelobby", "v_tunnel_hole", "Carwash_with_spinners", "sp1_10_real_interior", "sp1_10_real_interior_lod", "ch1_02_open", "bkr_bi_id1_23_door", "lr_cs6_08_grave_closed", "methtrailer_grp1", "bkr_bi_hw1_13_int", "CanyonRvrShallow", "bh1_47_joshhse_unburnt", "bh1_47_joshhse_unburnt_lod", "hei_sm_16_interior_v_bahama_milo_", "cs3_05_water_grp1", "cs3_05_water_grp1_lod", "trv1_trail_start", "canyonriver01", "canyonriver01_lod", "ferris_finale_anim", "rc12b_fixed", "rc12b_hospitalinterior_lod", "rc12b_hospitalinterior", "hei_dlc_windows_casino", "hei_dlc_casino_aircon", "vw_casino_main", "vw_casino_garage", "vw_casino_carpark", "vw_casino_penthouse"],
    Enable : function(){
        EnableIpl(Base.ipl, true);
        let penthouse = getInteriorByType(976.6364,70.2947,115.1641,"vw_dlc_casino_apart", "vw_casino_penthouse");
        let ks_casino_vault = getInteriorByType(946.251,43.2715,58.9172,"ks_casino_vault", "ks_casino_vault_milo_");
        let ks_casino_main = getInteriorByType(935.1050,42.5656,71.2737,"ks_casino_main", "ks_casino_main_milo_");
        let ks_casino_back = getInteriorByType(974.5600,22.5161,70.8396,"ks_casino_back", "ks_casino_back_milo_");
        let ks_casino_tunnel = getInteriorByType(930.1539,-0.2010,59.1323,"ks_casino_tunnel", "ks_casino_tunnel_milo_");
        native.activateInteriorEntitySet(penthouse, "set_pent_tint_shell");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_bar_party_1");  
        native.activateInteriorEntitySet(penthouse, "set_pent_media_bar_open");
        native.activateInteriorEntitySet(penthouse, "set_pent_spa_bar_open");
        native.activateInteriorEntitySet(penthouse, "set_pent_dealer");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_nodealer");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_media_bar_closed");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_spa_bar_closed");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_pattern_01");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_pattern_03");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_pattern_02");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_pattern_04");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_pattern_05");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_pattern_06");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_pattern_07");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_pattern_08");
        native.activateInteriorEntitySet(penthouse, "set_pent_pattern_09");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_arcade_modern");
        native.activateInteriorEntitySet(penthouse, "set_pent_arcade_retro");
        native.activateInteriorEntitySet(penthouse, "set_pent_clutter_03");
        native.activateInteriorEntitySet(penthouse, "set_pent_clutter_02");
        native.activateInteriorEntitySet(penthouse, "set_pent_clutter_01");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_lounge_blocker");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_guest_blocker");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_office_blocker");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_cine_blocker");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_spa_blocker");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_bar_blocker");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_bar_party_after");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_bar_clutter");
        native.activateInteriorEntitySet(penthouse, "set_pent_bar_party_2");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_bar_light_0");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_bar_light_01");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_bar_light_02");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_bar_party_0");
        native.deactivateInteriorEntitySet(penthouse, "set_pent_bar_party_1");
        native.setInteriorEntitySetTintIndex(penthouse,"set_pent_tint_shell",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_bar_party_1",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_tint_shell",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_media_bar_open",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_spa_bar_open",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_dealer",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_nodealer",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_media_bar_closed",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_spa_bar_closed",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_pattern_01",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_pattern_03",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_pattern_02",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_pattern_04",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_pattern_05",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_pattern_06",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_pattern_07",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_pattern_08",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_pattern_09",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_arcade_modern",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_arcade_retro",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_clutter_03",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_clutter_02",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_clutter_01",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_lounge_blocker",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_guest_blocker",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_office_blocker",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_cine_blocker",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_spa_blocker",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_bar_blocker",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_bar_party_after",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_bar_clutter",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_bar_party_2",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_bar_light_0",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_bar_light_01",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_bar_light_02",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_bar_party_0",0);
        native.setInteriorEntitySetTintIndex(penthouse, "set_pent_bar_party_1",0);
        native.refreshInterior(penthouse);
        native.activateInteriorEntitySet(ks_casino_vault, "set_vault_diamonds_02");
        native.activateInteriorEntitySet(ks_casino_vault, "set_vault_diamonds_01");
        native.activateInteriorEntitySet(ks_casino_vault, "set_vault_gold_02");
        native.activateInteriorEntitySet(ks_casino_vault, "set_vault_gold_01");
        native.activateInteriorEntitySet(ks_casino_vault, "set_vault_art_02");
        native.activateInteriorEntitySet(ks_casino_vault, "set_vault_art_01");
        native.activateInteriorEntitySet(ks_casino_vault, "set_vault_cash_02");
        native.activateInteriorEntitySet(ks_casino_vault, "set_vault_cash_01");
        native.activateInteriorEntitySet(ks_casino_vault, "set_vault_dressing");
        native.activateInteriorEntitySet(ks_casino_vault, "set_spawn_group2");
        native.activateInteriorEntitySet(ks_casino_vault, "set_spawn_group1");
        native.deactivateInteriorEntitySet(ks_casino_vault, "set_vault_door_broken");
        native.activateInteriorEntitySet(ks_casino_vault, "set_vault_door");
        native.deactivateInteriorEntitySet(ks_casino_vault, "set_vault_door_closed");
        native.refreshInterior(ks_casino_vault);
        native.activateInteriorEntitySet(ks_casino_main, "casino_manager_default");
        native.activateInteriorEntitySet(ks_casino_main, "casino_manager_workout");
        native.refreshInterior(ks_casino_main);
        native.activateInteriorEntitySet(ks_casino_back, "casino_back_laundry_damage");
        native.refreshInterior(ks_casino_back);
        native.activateInteriorEntitySet(ks_casino_tunnel, "set_tunnel_collapse");
        native.refreshInterior(ks_casino_tunnel);
    }
}