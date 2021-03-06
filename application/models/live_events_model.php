<?php

class Live_events_model extends CI_Model {

    public function __construct() {
        $this->load->helper('uvod_api');
        $this->load->model('fastcache_model');
    }

    public function get_next_event() {
        return apiCall("event/get_next_event");
    }

    public function get_event_products($ids) {

        return apiCall("event/get_event_products", array('products_id' => $ids));
    }

    public function list_simple_events() {

        $cache_id = 'event/list_simple_events';

        $cache = $this->fastcache_model->get_cache($cache_id);
        if (!$cache) {
            error_log('LIST EVENTS - USA LA BASE');
            $data = apiCall("event/list_simple_events", array());
            $this->fastcache_model->set_cache($cache_id, $data);
        } else {
            error_log('LIST EVENTS - USA EL CACHE');
            $data = $cache;
        }

        return $data;
    }

    public function get_event_data() {

        $cache_id = 'event/get_event_data';

        $cache = $this->fastcache_model->get_cache($cache_id);
        if (!$cache) {
            error_log('LIVE EVENT DATA - USA LA BASE');
            $data = apiCall("event/get_event_data", array());
            $this->fastcache_model->set_cache($cache_id, $data);
        } else {
            error_log('LIVE EVENT DATA - USA EL CACHE');
            $data = $cache;
        }

        return $data;
    }

    public function get_events() {
        $cache_id = 'event/get_event_data';

        $cache = $this->fastcache_model->get_cache($cache_id);
        if (!$cache) {
            error_log('LIVE EVENT DATA - USA LA BASE');
            $data = apiCall("event/get_event_data", array());
            $this->fastcache_model->set_cache($cache_id, $data);
        } else {
            error_log('LIVE EVENT DATA - USA EL CACHE');
            $data = $cache;
        }

        return $data;
    }

    public function get_orders($id) {

        return apiPost("event/get_orders", array('id' => $id));
    }

    public function get_orders_item($id) {

        return apiPost("event/get_orders_item", array('id' => $id));
    }

    public function subscription_checkout($product_id, $token, $nonce, $first_name, $last_name, $email, $city, $postal_code, $country, $pi_month, $pi_year, $pi_type, $pi_number, $pi_security_code) {

        return apiPost("event/event_subscription_checkout", array('product_id' => $product_id, 'token' => $token, 'nonce' => $nonce, 'first_name' => $first_name, 'last_name' => $last_name,
          'email' => $email, 'city' => $city, 'postal_code' => $postal_code, 'country' => $country, 'pi_month' => $pi_month, 'pi_year' => $pi_year, 'pi_type' => $pi_type, 'pi_number' => $pi_number, 'pi_security_code' => $pi_security_code));
    }

}

?>