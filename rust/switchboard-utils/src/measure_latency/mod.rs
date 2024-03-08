use std::time::Instant;

pub struct LatencyMeasure<F: FnOnce(f64)> {
    start: Instant,
    closure: Option<F>,
}

impl<F: FnOnce(f64)> LatencyMeasure<F> {
    // The constructor now takes a closure as an argument
    pub fn new(closure: F) -> Self {
        LatencyMeasure {
            start: Instant::now(),
            closure: Some(closure),
        }
    }
}

impl<F: FnOnce(f64)> Drop for LatencyMeasure<F> {
    fn drop(&mut self) {
        let elapsed = self.start.elapsed();
        if let Some(closure) = self.closure.take() {
            closure(elapsed.as_secs_f64());
        }
    }
}
